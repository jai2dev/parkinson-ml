import os
import pandas
import sys
import os
import pandas as pd
from flask import Flask, render_template, request, jsonify, send_from_directory, send_file
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

from xgboost import XGBClassifier
import pickle

from xgboost import XGBRegressor,XGBClassifier


import waveread
from fundamental_frequency import calculate_fundamental_frequency_features
from feature_engineering import engineer_features
import numpy as np
import parselmouth


# model load

MODEL = pickle.load(open('./modelx.h5','rb'))


app = Flask(__name__)

CORS(app)


@app.route('/predict', methods=['POST','GET'])
def predict():

    if request.method=='POST':
        f=request.files['file']
        f.save(f.filename)

        
        sound_data = waveread.read(f.filename)

        sound = parselmouth.Sound(f.filename)

        # # Calculate features
 
        fundamental_frequency_features = calculate_fundamental_frequency_features(sound_data)
        other_features = engineer_features(sound)


        # Concatenate features in the order the model expects, then make a prediction.

        
        names=['MDVP:Fo(Hz)', 'MDVP:Fhi(Hz)', 'MDVP:Flo(Hz)', 'MDVP:Jitter(%)', 'MDVP:Jitter(Abs)', 'MDVP:RAP', 'MDVP:PPQ', 'Jitter:DDP','MDVP:Shimmer', 'MDVP:Shimmer(dB)', 'Shimmer:APQ3', 'Shimmer:APQ5' , 'MDVP:APQ', 'Shimmer:DDA', 'HNR']
        model_input = np.concatenate([fundamental_frequency_features, other_features])

        model_input=np.array(model_input)
        model_input = np.reshape(model_input, (1, 15))
        test = pd.DataFrame(data = model_input,  
                        columns = names)

        # print(model_input)

        prediction = MODEL.predict_proba(test)
        

        # We only process one sound file so there should only be one prediction to return.
        
        prediction = prediction[0][0]
        # print(prediction)

        # print(prediction_array)

        response=jsonify({'prediction': '{:.3f}'.format(prediction),'averageFundamentalFrequency': str(model_input[0][0]),
                           'jitter': str(model_input[0][3]),
                           'shimmer': str(model_input[0][8])})

        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

        


if __name__ == '__main__':

    app.run(host='127.0.0.1', port=8080, threaded=True)


CORS(app, expose_headers='Authorization')








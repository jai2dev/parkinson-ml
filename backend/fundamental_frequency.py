import numpy as np
import matplotlib.pyplot as plt


def calculate_fundamental_frequency_features(sound_file):
    i = sound_file[1].size

    x = sound_file[1]
    # print(sound_file[1].shape[1])
    if len(sound_file[1].shape)==1:
        v1 = np.arange(float (i)/float(1))
    else:
        v1 = np.arange(float (i)/float(sound_file[1].shape[1]))
    print(v1,i)
    c = np.c_[v1, x]

    cc = c.T  # Transpose
    print(cc)
    x2 = cc[2]

    stop = (float(i)/float(2))
    step_time = 1.25
    step = int(step_time*sound_file[0])
    intervals = np.arange(0, int(stop), step)

    # Chop up the time series
    fundamental_frequencies = np.array([])

    for delta_t in intervals:
        x_part = x2[delta_t:delta_t+step]

        # Sonogram
        Pxx, freqs, bins, im = plt.specgram(x_part, NFFT=int(sound_file[0]*0.008), Fs=sound_file[0], noverlap =int(sound_file[0]*0.005))

        # Filtering freq in the sonogram
        Pxx = Pxx[(freqs >= 100) & (freqs <= 8000)]
        freqs = freqs[(freqs >= 100) & (freqs <= 8000)]
        Pxx_transposed = Pxx.T
        max_intensity = []
        frec_max = []

        # Find the fundamental frequencies
        for j, element in enumerate(Pxx_transposed):
            max_intensity_index = np.argmax(element)
            max_intensity.append(element[max_intensity_index])
            frec_max.append(freqs[max_intensity_index])

        # Store fundamental frequencies for the interval
        fundamental_frequencies = np.append(fundamental_frequencies, frec_max)

    fo = np.mean(fundamental_frequencies)
    fhi = np.max(fundamental_frequencies)
    flo = np.min(fundamental_frequencies)

    return np.array([fo, fhi, flo])


# [[ 0.000000e+00  1.000000e+00  2.000000e+00 ...  3.367148e+06
#    3.367149e+06  3.367150e+06]
#  [ 2.560000e+03  2.304000e+03  2.304000e+03 ... -2.944000e+04
#   -2.841600e+04 -2.636800e+04]]

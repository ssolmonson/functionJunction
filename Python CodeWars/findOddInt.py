# Kata Find Odd Int
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    intCount = 0
    # Loop over array
    for i in seq:
    # If one value (int) equals another increase count
        if seq[i] == seq[i+1]:
            intCount += 1
            
    if intCount != 0:
        return intCount
    else:
        return -1
    # return None
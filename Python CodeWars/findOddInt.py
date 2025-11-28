# Kata Find Odd Int
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    intCount = 0
    # Loop over array
    for i in range(len(seq)):
        for j in range(i + 1, len(seq)):
            # If one value (int) equals another increase count
            print(seq[i], "compared to", seq[j])
            
    # if intCount != 0:
        # return intCount
    # else:
        # return -1
    # return None

# Test funtion calls
find_it([1,1,1,1,1,1,10,1,1,1,1]) # Expected 10
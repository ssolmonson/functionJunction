# Kata Equal Side Of An Array
# https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/python

def find_even_index(arr):

    # Create variables for comparison
    equalIndex = 0 # May not be necessary
    leftArr = 0
    rightArr = 0

    # Loop through array and store values in defined variables
    for i in range(len(arr)):
        # leftArr = arr[:i]
        # rightArr = arr[i+1:]
        leftArr = sum(arr[:i])
        rightArr = sum(arr[i+1:])
        # leftArrSum = sum(leftArr)
        # rightArrSum = sum(rightArr)
        # Compare values. If splits at index are equal return index.
        # if leftArrSum == rightArrSum:
        #   return i
        print(leftArr)
        print(rightArr)
        # print(i)
    # pass
    # print(arr)
# Notes:
# First test index array functions to see if they can be stored correctly
#   - Use console to view stored values
#   - Can test on single value first
# Possibly can directly compare the sums without storing variables

# Console Tests:
find_even_index([1,2,3,4,3,2,1]) # Should be 3
# find_even_index([20,10,-80,10,10,15,35]) # should be 0
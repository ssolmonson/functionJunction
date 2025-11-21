# Kata Equal Side Of An Array
# https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/python

def find_even_index(arr):

    # Create variables for comparison
    # equalIndex = 0 # May not be necessary
    # leftArr = 0
    # rightArr = 0

    # Loop through array and store values in defined variables
    for i in range(len(arr)):
        # leftArr = arr[:i]
        # rightArr = arr[i+1:]
        # leftArr = sum(arr[:i])
        # rightArr = sum(arr[i+1:])
        # leftArrSum = sum(leftArr)
        # rightArrSum = sum(rightArr)
        # equalIndex = i
        # Compare values. If splits at index are equal return index.
        # if leftArr == rightArr:
        if sum(arr[:i]) == sum(arr[i+1:]):
          return i
          # return equalIndex
          # print(i)
        
    return -1
            # print(-1)
        
        # print(leftArr)
        # print(rightArr)
        # print(i)
    # pass
    # print(arr)
# Notes:
# First test index array functions to see if they can be stored correctly
#   - Use console to view stored values
#   - Can test on single value first
# Possibly can directly compare the sums without storing variables

# Tests pass for some but return -1 for others
# Fixed: After reviewing, I overlooking the if statement and realized the else would return -1 if the first comparison wasn't true cause the test to fail.
#       To correct this I moved the 'return -1' outside of the if statement and in-line with the for loop which caused the tests to successfully pass
# This can be simplified further by removing th variables and comparing the left and right sums based on the index, and returning i if they are equal

# Console Tests:
find_even_index([1,2,3,4,3,2,1]) # Should be 3
# find_even_index([20,10,-80,10,10,15,35]) # should be 0
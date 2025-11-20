# Kata Friend or Foe?
# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    
    # Create variable of empty list for friends to be added to
    friendList = []
    
    # Loop over friend list 
    #   Compare length of string to 4
    #   if equal to 4 append name to friend list
    for f in x:
        # print(f.split())
        # print(''.join(f.split()))
        if len(f) == 4:
            friendList.append(f)
        # print(f)

    # return list of friends
    return friendList
    # print(friendList)

# Console test
friend(["Ryan", "Kieran", "Mark",])

# Notes:
# Initial try may have been using .split() on the list.
# Also it may not even be needed to split the string, simply could compare the string to a number. Completely overthought this step.
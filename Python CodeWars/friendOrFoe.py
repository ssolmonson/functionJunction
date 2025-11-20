# Kata Friend or Foe?
# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    
    # Create variable of empty list for friends to be added to
    friendList = []
    
    # Loop over friend list 
    #   for each friend split string into list
    #   Compare length of string to 4
    #   if equal to 4 append name to friend list
    for f in x:
        if len(f.split()) == 4:
            friendList.append(f)

    # return list of friends
    return friendList
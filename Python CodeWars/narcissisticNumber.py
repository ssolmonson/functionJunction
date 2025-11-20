# Kata Narcissistic Number excercise
# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python

# Refractor
def narcissistic( value ):
 
    total = 0

    for digit in str(value):
        total += int(digit) ** len(str(value))

    if total == value:
        return True
    else:
        return False

# FIRST ATTEMPT
# def narcissistic( value ):
#    # Split digits
#    digits = [int(d) for d in str(value)]
#
#    # Count number of digits
#        # Store as a variable
#            # numberDigits
#    numberDigits = len(digits)    
#    # if number of digits equals 1 return True
#    total = 0
#    if numberDigits == 1:
#        return True
#    # else use stored number for comparisson
#    else:
#        # Loop 
#        # Each digit is calculated to the power of the numOfDigits variable and added to the next
#        for digit in digits:
#            # n ** numberDigits or pow(n, numberDigits)
#            total += digit ** numberDigits
#            # and add
#        
#    # Then compare looped value to original value and return true or false
#    if total == value:
#        return True
#    else:
#        return False
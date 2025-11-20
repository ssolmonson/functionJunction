# Kata Decode Morse Code
# https://www.codewars.com/kata/54b724efac3d5402db00065e/train/python

from preloaded import MORSE_CODE

def decode_morse(morse_code):
    # you can use the preloaded MORSE_CODE dictionary:
    # letter = MORSE_CODE[morse]
    # For example: 
    #   MORSE_CODE['.-'] = 'A'
    #   MORSE_CODE['--...'] = '7'
    #   MORSE_CODE['...-..-'] = '$'

    # Remove trailing/leading spaces
    morse_code = morse_code.strip()

    # Create variable for list from string
    morseList = morse_code.split("   ")
    decodedMorse = []

    # Remove leading or trailing whitespaces
    # if morseList[0] == ' ':
    #     del morseList[0]
    # if morseList[-1].strip() == "":
    #     del morseList[-1]
    

    # Split string into list of strings and loop of morse_code string
    #   Using MORSE_CODE library define what each list item represents and add to new string
    for morsal in morseList:
        morseLetters = morsal.split(" ")
        decodedMorse.append("".join(MORSE_CODE[m] for m in morseLetters))

    # Then concat string to form the result
    # return ','.join(decodedMorse)
    return " ".join(decodedMorse)
    # Additional thoughts:
    #   Fixed: Keep in mind potential spcaing and may have to adjust for it in the loop
    #       First attempt proved the space is not included in the split. Need to figure out how to include the space
    #   Fixed: Will also need to ensure leading and trailing whitespaces (spaces) are removed
    #       As an initial thought could use the index to remove spaces if the first/last index equal space strings
    #   Realized while working and troubleshooting failing tests in Code Wars that I was including extra steps
    #       1) Completely forgot the true definition of the .split() function. Removed the if statements and simplified to just use .split() on the argument and overwrite th variable
    #       2) Overlooked appending the list and joining it back together. While initial tests when testing the more code string worked in the console,
    #       there were complications when applying it to conversion using the MORSE_CODE library
    #       3) These splitting of the string into a list and then appending with conversion into letters/numbers/etc. can be done in the same loop.

    # Used to test
    # Comment out 'print' when attempting to solve kata
    # print (morseList)

    # Possibly need to add back below line when attempting
    # pass
# Strings for testing in console    
# decode_morse('.... . -.--   .--- ..- -.. .')
# decode_morse('   .   . ')
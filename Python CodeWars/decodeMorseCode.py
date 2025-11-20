# from preloaded import MORSE_CODE

def decode_morse(morse_code):
    # you can use the preloaded MORSE_CODE dictionary:
    # letter = MORSE_CODE[morse]
    # For example: 
    #   MORSE_CODE['.-'] = 'A'
    #   MORSE_CODE['--...'] = '7'
    #   MORSE_CODE['...-..-'] = '$'

    # Create variable for list from string
    # morseList = morse_code.split()
    morseList = []
    count = 0

    for m in morse_code.split():
        if m == "":
            count += 0
        else:
            if count:
                morseList.append(" " * count)
                count = 0
            morseList.append(m)
    # Loop of morse_code string
    #   Using MORSE_CODE library define what each list item represents and add to new string
    # Then concat string to form the result
    
    # Additional thoughts:
    #   Keep in mind potential spcaing and may have to adjust for it in the loop
    #       First attempt proved the space is not included in the split. Need to figure out how to include the space

    # Used to test
    # Comment out 'print' when attempting to solve kata
    print (morseList)

    # Add back below line when attempting
    # pass
decode_morse('.... . -.--   .--- ..- -.. .')
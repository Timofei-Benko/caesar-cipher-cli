# Ceaser Cipher CLI Tool

## Description
This is a CLI (Command Line Interface) tool that that allows for encryption / decryption of text.

Works only with latin alphabet without diacritics (letters with diacritics or letters such as ß will not be 
encrypted / decrypted).

The tool accepts the next parameters:
* `-a / --action`: _(Required)_. Action you want to perform on your input. Must be followed by either of these 
  arguments: `decode` or `encode`
* `-s / --shift`: _(Required)_. Number of characters each symbol of your input will be shifted by. __Must be an 
  integer greater than 0__
* `-i / --input`: _(Optional)_. Relative or absolute path to a .txt file with the text you want to run through the 
  program. If parameter is not present, you will have to provide the text in the terminal after program starts to 
  execute
* `-o / --output`: _(Optional)_. Relative or absolute path to a .txt file where the resulting text will be put to. 
  If parameter is not present, the resulting text will be shown in the terminal

The parameters can be provided in either short, or full form. You can also combine the two (e.g. `--action decode -s 
7` will work).

You will find usage examples bellow. 


## How to use

1. Naviagte to the directory you want to clone the project to and run `git clone https://github.
   com/Timofei-Benko/caesar-cipher-cli.git` via terminal
   
1. Make sure that you are in the project's root and run `npm install`
1. Run the tool following the example bellow: `node cc-cli.js -a encode -s 7 -i 'input.txt' -o 
   'output.txt'`
1. In case you haven't provided a path to input file, type the text you want to run through the program in the 
   terminal after you executed `node cc-cli ...`
1. In above described case, press `Ctrl + C` to quit the program
   
## Used technologies
* NodeJS
* [minimist](https://github.com/substack/minimist)


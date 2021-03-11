/******************************************************************************************
 * AUTHOR: XueMei Lin
 * DATE: 18/10/2020
 * EMAIL: alu0101225845@ull.edu.es
 * GITHUB: XueMei-L
 * UNIVERSITY: Universidad de la laguna
 * DEGREE: Computer engineering degree
 * SUBJECT: Computabilidad y Algoritmia
 * PRACTICENUM: 3
 * VERSION: 4.0
 * TITLE: Palindrome
 * COMPILATION: g++ -std=c++14 -g -Wall -o palindrome_prod palindrome_prod.cc Palindrome.cc
 * MAKEFILE: make (compile files) 
 *           make clean (Delete files other than the source code)
 * DESCRIPTION: Find all capicual numbers of all n-digit products
 * DATAMODIFICATION: 18/10/2020
 * ULR: https://google.github.io/styleguide/cppguide.html
 *		https://github.com/fsande/IB-class-code-examples/blob/master/IntroductionToC%2B%2B/Makefile
 * NOTE: This is a file of type .cc, this is file main of the program
 * *****************************************************************************************/

#include <iostream>             //Entry and exit library
#include "Palindrome.h" 

/*Convert the first element that the console writes to an int type
first element is the number of digits
Convert the second element that the console writes to a string
first element is the file name*/
int main(int argc, char* argv[]){
    int numb_digits = atoi(argv[1]);
    std::string fn(argv[2]);
    Palindrome Palindrome(numb_digits, fn);      //Funcion palindrome
    return 0;
}
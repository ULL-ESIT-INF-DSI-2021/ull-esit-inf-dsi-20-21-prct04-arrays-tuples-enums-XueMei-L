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
 *      https://github.com/fsande/IB-class-code-examples/blob/master/IntroductionToC%2B%2B/Makefile
 * NOTE: This is header file
 * *****************************************************************************************/
 
#include <iostream>     //Entry and exit library
#include <fstream>      //Header files for mathematical functions

class Palindrome{
public:
    Palindrome();
    Palindrome(int n, std::string fn);
    ~Palindrome();

private:  
    /*To find palindrome*/
    void Find(int i, int j, int val, std::ofstream& outfile, int& count);
};
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
 * NOTE: This is a file of type .cc, implement functions of the class Palindrome
 * *****************************************************************************************/

#include "Palindrome.h"
#include <cmath>        //Header files for mathematical functions

/*Builder*/
Palindrome::Palindrome(){}

/*Function does: Go through two numbers, 
it does the multiplication of said two numbers*/
Palindrome::Palindrome(int n, std::string fn){
    int kNumb_base = 10;
    int num_start = pow(kNumb_base, n-1);
    int num_final = pow(kNumb_base, n);
    int prod;

    std::ofstream outfile;
    outfile.open(fn);

    int count = 0;

    for(int i = num_start; i < num_final; i++){
        for(int j = i; j < num_final; j++){
            prod = i * j;
            Find(i, j, prod, outfile, count);
        }
    }
    outfile.close();
    std::cout << count << std::endl;
}

/*Destructor*/
Palindrome::~Palindrome(){}

/*Function of search capicua numbers
Invert a number to see if it is a palindrome or not*/
void Palindrome::Find(int i, int j, int val, std::ofstream& outfile, int& count){
    if(!outfile){
        std::cout << " Error: Error opening the file" << std::endl;
    }else{
        int sum = 0;
        int aux = val;

        while(aux > 0){
            sum = sum * 10 + ( aux % 10);
            aux /= 10;
        }
        if(sum == val){
            outfile << val << " = " << i << " x " << j << std::endl;
            count++;
        }
    }
}
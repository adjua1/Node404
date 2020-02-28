  exports.getGPA = (x,y,z,w) =>
  { 
    var grade = 0;
    if(x=='A')                  
    grade = grade +4;

    if(x=='B')
    grade = grade +3;

    if(x=='C')
    grade = grade +2.00;
 
    if(x=='D')
    grade = grade +1.00;

    if(x=='F')
    grade = grade +0;
    if(y=='A')                  
    grade = grade +4;

    if(y=='B')
    grade = grade +3;

    if(y=='C')
    grade = grade +2.00;
 
    if(y=='D')
    grade = grade +1.00;

    if(y=='F')
    grade = grade +0;
    if(z=='A')                  
    grade = grade +4;

    if(z=='B')
    grade = grade +3;

    if(z=='C')
    grade = grade +2.00;

    if(z=='D')
    grade = grade +1.00;

    if(z=='F')
    grade = grade +0;
    if(w=='A')                  
    grade = grade +4;

    if(w=='B')
    grade = grade +3;
 
    if(w=='C')
    grade = grade +2.00;

    if(w=='D')
    grade = grade +1.00;
 
    if(w=='F')
    grade = grade +0;
    if((w!='F')&&(w!='D')&&(w!='C')&&(w!='B')&&(w!='A'))
    {console.error("The value given " + w + " is not a valid input");
    return -1.0;
  }
    if((x!='F')&&(x!='D')&&(x!='C')&&(x!='B')&&(x!='A'))
    {console.error("The value given " + x + " is not a valid input");
    return -1.0;
}
    if((z!='F')&&(z!='D')&&(z!='C')&&(z!='B')&&(z!='A'))
    {console.error("The value given " + z + " is not a valid input");
    return -1.0;   
}
    if((y!='F')&&(y!='D')&&(y!='C')&&(y!='B')&&(y!='A'))
    {console.error("The value given " + y + " is not a valid input");
    return -1.0;   
}
    return  Math.round((grade/ 4) * 10)/10;
    
  ;};
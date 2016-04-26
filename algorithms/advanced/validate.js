/* jshint esversion: 6 */
const telephoneCheck = str => {
  const regex = [
    /^(1|1 )?[0-9]{3}[ \-]*[0-9]{3}[ \-]*[0-9]{4}$/,
    /^(1|1 )?\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
    /^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/
  ];
  
  return regex.reduce((acc, re) => acc || str.match(re) !== null,false);
};

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6505552368);");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");

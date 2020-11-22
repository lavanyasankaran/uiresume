import React,{useState} from 'react';
import {
    TextField,
    makeStyles,
    useMediaQuery,
    TextareaAutosize,
    Box,
    InputLabel,
    Select,
    Button,
    InputAdornment,
    Grid,
    
  } from "@material-ui/core";
 

  
  
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    header: {
        height: "20%",
        background: "#1de9b6",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        display: "flex",
        fontSize: "25px",
        justifyContent: "center",
        alignItems: "center",
      },
      mainDivLg: {
        height: "100%",
        width: "50%",
      },
      mainDivSm: {
        height: "50%",
        width: "90%",
      },
      textBoxDiv: {
        textAlign: "center",
        marginTop: "20px",
      },
      textBox: {
        width: "50%",
      },
      textBoxSm: {
        width: "80%",
      },
      buttonBoxDiv: {
        justifyContent: "center",
        marginTop: "20px",
      },
      inputlabel:{
          textAlign:"center"
      }
  }));
  

const Contactdetails =()=>{
    const classes = useStyles();
    const isMobile = useMediaQuery("(max-device-width:700px)");
    
    const[linkurl,setlinkurl]=useState("");
    const[phoneCategory,setphoneCategory] = useState("");
    const[country,setCountry]=useState("");
    const[phoneNumber,setphoneNumber] = useState("");
    const[extension,setExtension] = useState("");
    const[phoneComment,setphoneComment] = useState("");
    const[type,setType] = useState("");
    const[addrcountry,setAddrcountry] = useState("");
    const[addrline1,setAddrline1] = useState("");
    const[addrline2,setAddrline2] = useState("");
    const[addrline3,setAddrline3] = useState("");
    const[city,setCity] = useState("");
    const[postalcode,setPostalcode] = useState("");
    const[addrcomment,setAddrcomment] = useState("");
    const[emailcategory,setEmailcategory]=useState("");
    const[emailAddr,setEmailAddr]=useState("");
    const[emailComment,setEmailComment]=useState("");
    const[othercategory,setOthercategory]=useState("");
    const[username,setUsername]=useState("");
    const[otherComment,setOthercomment]=useState("");
    const onClick =(e)=>{
      e.preventDefault();
      
        console.log("linkedinurl",linkurl);
        console.log("phonecate",phoneCategory);
        console.log("country",country);
        console.log("phonenumber",phoneNumber);
        console.log("extension",setExtension);
        console.log("phonecomment",phoneComment);
        console.log("type",type);
        console.log("addrcountry",addrcountry);
        console.log("addrline1",addrline1);
        console.log("addrline2",addrline2);
        console.log("addrline3",addrline3);
        
      
  
    }
    return(
        
    <div className={classes.root}>
     <Box
        boxShadow={3}
        borderRadius={16}
        className={isMobile ? classes.mainDivSm : classes.mainDivLg}
      >
      <Box className={classes.header}>Contact details Form</Box>
    
    <Box className={classes.textBoxDiv}>
    <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>LinkedIn Url</InputLabel>
    <TextField
            
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setlinkurl(e.target.value)}
            value={linkurl}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />

      </Box>

      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Phone Category</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setphoneCategory(e.target.value)}
            value={phoneCategory}
            
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="Please Select" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Country</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setCountry(e.target.value)}
            value={country}
            
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="Please Select" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Phone Number</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setphoneNumber(e.target.value)}
            value={phoneNumber}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 
                </InputAdornment>
              ),
            }}
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Extension</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setExtension(e.target.value)}
            value={extension}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Comment Text</InputLabel>
      <TextareaAutosize className={isMobile ? classes.textBoxSm : classes.textBox} rowsMin={5} placeholder="Enter your comment" onChange={(e)=>setphoneComment(e.target.value)}/>;
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Type</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setType(e.target.value)}
            value={type}
            
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="Please Select" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Country</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setAddrcountry(e.target.value)}
            value={addrcountry}
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Address Line 1</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setAddrline1(e.target.value)}
            value={extension}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Address Line 2</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setAddrline2(e.target.value)}
            value={extension}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Address Line 3</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setAddrline3(e.target.value)}
            value={addrline3}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>City</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Postal Code</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setPostalcode(e.target.value)}
            value={extension}
            
            
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Comment Text</InputLabel>
      <TextareaAutosize className={isMobile ? classes.textBoxSm : classes.textBox} rowsMin={5} placeholder="Enter your comment" onChange={(e)=>setAddrcomment(e.target.value)}/>;
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Email Category</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setCountry(e.target.value)}
            value={country}
            
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="Please Select" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Email Address</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setEmailAddr(e.target.value)}
            value={emailAddr}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 
                </InputAdornment>
              ),
            }}
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Comment Text</InputLabel>
      <TextareaAutosize  className={isMobile ? classes.textBoxSm : classes.textBox} rowsMin={5} placeholder="Enter your comment" onChange={(e)=>setEmailComment(e.target.value)}/>;
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Other Contact Category</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setOthercategory(e.target.value)}
            value={country}
            
          
           inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="Please Select" value="" />
          <option value={10}>Male</option>
          <option value={20}>Female</option>
          <option value={30}>Unknown</option>
        </Select>
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Username</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setUsername(e.target.value)}
            value={emailAddr}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Comment Text</InputLabel>
      <TextareaAutosize  className={isMobile ? classes.textBoxSm : classes.textBox} rowsMin={5} placeholder="Enter your comment" onChange={(e)=>setOthercomment(e.target.value)}/>;
      </Box>
      <Grid container spacing={2} className={classes.buttonBoxDiv}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={onClick}
            >
              Submit
            </Button>
          </Grid>
          </Grid>
    </Box>
      
    
    
    </div>
    
    )
    
}

export default Contactdetails;
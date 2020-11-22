import React,{useState} from 'react';

import {
    TextField,
    makeStyles,
    useMediaQuery,
    Box,
    FormControl,
    InputLabel,
    Select,
    Button,
    InputAdornment,
    Grid,
    IconButton, MenuItem, Input, Chip, useTheme
  } from "@material-ui/core";
  import {
    AccountCircle,
    PhotoCameraRounded,
    ContactPhoneRounded,
    DoneOutlineRounded,
  } from "@material-ui/icons";
 

  import DateFnsUtils from '@date-io/date-fns';
  import {  KeyboardDatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
  import Autocomplete from '@material-ui/lab/Autocomplete';
  
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 }]

  const languageList = ["English","Mandarin Chinese","Spanish","Hindi","Bengali","Portuguese","Russian",
  "Japanese","Western Punjabi","Marathi","Telugu","Wu Chinese","Turkish","Korean","French","German","Vietnamese","Tamil",
  "Yue Chinese","Urdu","Javanese","Italian","Egyptian Arabic","Gujarati","Iranian Persian","Bhojpuri","Indonesian","Polish","Yoruba","Maithili"];
  const frequencyList = ["Native Language","Fluent","Working Language","Somewhat"];
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
        fontSize: 18
      },
      textBoxSm: {
        width: "80%",
      },
      buttonBoxDiv: {
        justifyContent: "center",
        marginTop: "20px",
      },
      inputRoot: {
        fontSize: 20
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      labelRoot: {
        fontSize: 20,
        color: " black",
        "&$labelFocused": {
          color: "grey"
        }
      },
      labelFocused: {}
  }));
  


const Persondetails =()=>{
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-device-width:700px)");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const[firstName,setFirstName]=useState("");
    const[middleName,setMiddleName] = useState("");
    const[lastName,setLastName]=useState("");
    const[gender,setGender] = useState("");
    const[prefix,setPrefix] = useState("");
    const[suffix,setSuffix] = useState([]);
    const[citizenship,setCitizenship] = useState([]);
    const[status,setStatus]=useState("");
    const[selectedLang,setSelectedLang]=useState([]);
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const onClick =(e)=>{
      e.preventDefault();
      
        console.log("firstname",firstName);
        console.log("lastname",lastName);
        console.log("middlename",middleName);
        console.log("gender",gender);
        console.log("prefix",prefix);
        console.log("suffix",suffix);
        console.log("citizenship",citizenship);
        console.log("status",status);
      
  
    }
    return(
        
    <div className={classes.root}>
     <Box
        boxShadow={3}
        borderRadius={16}
        className={isMobile ? classes.mainDivSm : classes.mainDivLg}
      >
      <Box className={classes.header}>Person Details Form</Box>
    
    <Box className={classes.textBoxDiv}>
    
    <TextField
            
            className={isMobile ? classes.textBoxSm : classes.textBox}
            label="First Name"
            onChange={(e)=>setFirstName(e.target.value)}
            value={firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              classes: { root: classes.inputRoot } 
            } }

            InputLabelProps={{
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused
          }
        }}
          />
         
      </Box>

      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Middle Name</InputLabel>
    <TextField
            
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setMiddleName(e.target.value)}
            value={middleName}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Last Name</InputLabel>
    <TextField
           // label="Last Name"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            onChange={(e)=>setLastName(e.target.value)}
            value={lastName}
            
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            
          />

      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Gender</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setGender(e.target.value)}
            value={gender}
            
          
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
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Prefix</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          onChange={(e)=>setPrefix(e.target.value)}
            value={prefix}
          
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
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Suffix</InputLabel>
      <br/>
      <Autocomplete
      
        multiple
        onChange={(e,values)=>setSuffix([...suffix,values])}
       
        id="tags-outlined"
        options={top100Films}
        
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            placeholder="Favorites"
          />
        )}
      />
      </Box>
      <Box className={classes.textBoxDiv}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
    className={isMobile ? classes.textBoxSm : classes.textBox}
       disableToolbar
       fullWidth
       variant="inline"
       format="MM/dd/yyyy"
       margin="normal"
       id="date-picker-inline"
       label="Date Of Birth"
       value={selectedDate}
       onChange={handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change date',
       }}
     />
</MuiPickersUtilsProvider>
       
      </Box>
      <Box className={classes.textBoxDiv}>
        <div>
      <InputLabel id="langLabel">Language</InputLabel>
        <Select
          labelId="langLabel"
          id="demo-simple-select"
          style={{width:"50%"}}
          onChange={(e)=>{
            const newLang = {name:e.target.value};
            setSelectedLang([...selectedLang,newLang]);
          }}
        >
          {languageList.map((lang) => (
            <MenuItem value={lang}>{lang}</MenuItem>
          ))}
        </Select>
        </div>
        {
          selectedLang.length > 0 && selectedLang.map(lang => (
            <div>
            <FormControl variant="outlined" className={classes.formControl} style={{width:"40%"}}>
              <InputLabel id="langLabel">{lang.name}</InputLabel>
              <Select
                labelId="langLabel"
                id="demo-simple-select"
                
                onChange={(e)=>{
                  selectedLang.forEach(eachLang=>{if(eachLang.name === lang.name) lang.frequency=e.target.value});
                  setSelectedLang([...selectedLang]);
                }}
              >
                <MenuItem value=""><em>Please Select</em></MenuItem>
                {frequencyList.map((fluency) => (
                  <MenuItem value={fluency}>{fluency}</MenuItem>
                ))}
              </Select>
              </FormControl>
              </div>
          ))
        }
      
  
          
        
        
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Citizenship</InputLabel>
      <br/>
      <Autocomplete
      
        multiple
        id="tags-outlined"
        onChange={(e,values)=>setCitizenship(...citizenship,values)}
       
        options={top100Films}
        
        getOptionLabel={(option) => option.title}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            className={isMobile ? classes.textBoxSm : classes.textBox}
            placeholder="Add"
          />
        )}
      />
      
      </Box>
      <Box className={classes.textBoxDiv}>
      <InputLabel className={isMobile ? classes.textBoxSm : classes.textBox}>Profile Status</InputLabel>
        <Select
          native
          className={isMobile ? classes.textBoxSm : classes.textBox}
          
          onChange={(e)=>setStatus(e.target.value)}
            value={status}
          
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
          <br/>
    </Box>
    
    </div>
    
    )
    
}

export default Persondetails;
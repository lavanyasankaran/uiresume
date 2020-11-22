import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
    { title: 'Inception', year: 2010 }]
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
const Profile =()=>{
    const classes = useStyles();
    const [formData,setFormData]=useState({
      startdate:'',
      enddate:'',
      positionsummary:'',
      jobnote:''
    })
    const[state,setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false
    })
    const[tags,setTags]=useState([])
    const[position,setPosition]=useState([])
    const[primary,setPrimary]=useState([])
    const[additional,setAdditional]=useState([])
    const [title,setTitle]=useState([])
    const[functions,setFunctions]=useState([])
    const[industries,setIndustries] = useState([])
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      const{
        startdate,
        enddate,
        positionsummary,
        jobnote
      }=formData
      const onChange =(e) =>{
        setFormData({...formData,[e.target.name] : [e.target.value]})
        console.log(formData)
        console.log("tags=",tags)
        console.log("industries",industries)
        console.log("position=",position)
      }
     
    return(
        <Fragment>
<FormGroup row>
<FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary"/>}
        label="Primary Job" 
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary"/>}
        label="Secondary Job" 
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" color="primary"  />}
        label="Secondary Job" 
      />
     </FormGroup>
     <br/>
     <Autocomplete
     
     
      id="combo-box-demo"
      
      // eslint-disable-next-line react/jsx-no-duplicate-props
      onChange={(e,values)=>{setTags(values)}}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Company Name" variant="outlined" />}
    />
    <br/>
    <Autocomplete
     onChange={(e,values)=>{
       setPosition(values)
     }}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Position" variant="outlined" />}
    />
    <br/>
    <form className={classes.container} noValidate>
      <TextField
        id="month"
        name="startdate"
        value={startdate}
        onChange={onChange}
        label="Position Start Date"
        type="month"
        defaultValue="2017-05"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <br/>
    <form className={classes.container} noValidate>
      <TextField
        id="month"
        name="enddate"
        value={enddate}
        onChange={onChange}
        label="Position End Date"
        type="month"
        defaultValue="2017-05"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <br/>
    <Autocomplete
      id="combo-box-demo"
      
      onChange={(event,values)=>{setPrimary(values)}}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Primary Job Location" variant="outlined" />}
    />
    <br/>
    <Autocomplete
      id="combo-box-demo"
      
      onChange={(event,values) =>{setAdditional(values)}}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Additional Job Location" variant="outlined" />}
    />
    <br/>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      onChange={(event,values)=>setTitle(values)}
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Position Titles" placeholder="Add Titles" />
      )}
    />

<br/>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      onChange={(event,values) =>{setFunctions(values)}}
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label=" Enter Custom Functions" placeholder="Add Functions" />
      )}
    />
    <br/>
    <TextareaAutosize
      rowsMin={3}
      aria-label="Position Summary"
      placeholder="Position Summary"
      name="positionsummary"
      value={positionsummary}
      onChange={onChange}
    />
    <br/>
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      onChange={(event,values)=>setIndustries(values)}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Industries" placeholder="Add Industries" />
      )}
    />
    <br/>
    <TextareaAutosize
      rowsMin={3}
      aria-label="Position Summary"
      placeholder="Job Note"
      name="jobnote"
      value={jobnote}
      onChange={onChange}
    />
     </Fragment>
    )
}

export default Profile;

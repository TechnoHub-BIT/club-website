import React from 'react'
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import {TextField,Button} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {firebaseApp} from '../firebase';

// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(2),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
// }));

  class Profile extends React.Component {

    constructor() {
      super();
      this.state = {
        fullname: "",
        branch: "",
        semester: "",
        skills: ""
      };
    }

    updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    addUser = e => {
      e.preventDefault();
      const db = firebaseApp.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("members").add({
        fullname: this.state.fullname,
        branch: this.state.branch,
        semester: this.state.semester,
        skills: this.state.skills
      });  
      this.setState({
        fullname: "",
        branch: "",
        semester: "",
        skills: ""
      });
    };
    render() {
      return (
        <div>
            <h2>New Registration</h2>
            <form onSubmit={this.addUser} >
           <FormControl>
            {/* <FormControl className={classes.formControl}> */}
                <InputLabel htmlFor="my-input">Full Name</InputLabel>
                <Input id="fullname" aria-describedby="my-helper-text" value={this.state.fullname} onChange={this.updateInput}/>
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="email" aria-describedby="my-helper-text" onChange={this.updateInput}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <br/>
            <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-age-native-simple">Departments</InputLabel>
              <Select
                native
                label="Departments"
                inputProps={{
                  name: 'branch',
                  id: 'branch',
                }}
                onChange={this.updateInput}
                value={this.state.branch}>
                <option aria-label="None" value="" />
                <option value={1}>Computer Science Engineering</option>
                <option value={2}>Information Technology</option>
                <option value={3}>Electronics and Telecom. Engineering</option>
                <option value={4}>Electrical Engineering</option>
                <option value={5}>Electrical and Electronics Engineering</option>
                <option value={6}>Civil Engineering</option>
                <option value={7}>Mechanical Engineering</option>
                <option value={8}>Master of CA</option>
                <option value={9}>Master of BA</option>

              </Select>
            </FormControl>
            <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-age-native-simple">Semester</InputLabel>
              <Select
                native
                label="Semester"
                inputProps={{
                  name: 'semester',
                  id: 'semester',
                }}
                onChange={this.updateInput} 
                value={this.state.semester}>
                <option aria-label="None" value="" />
                <option value={1}>First</option>
                <option value={2}>Second</option>
                <option value={3}>Third</option>
                <option value={4}>Fourth</option>
                <option value={5}>Fifth</option>
                <option value={6}>Sixth</option>
                <option value={7}>Seventh</option>
                <option value={8}>Eighth</option>
                
              </Select>
            </FormControl>
            <br/>
            <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-age-native-simple">Member</InputLabel>
              <Select
                native
                label="Member"
                inputProps={{
                  name: 'member',
                  id: 'member',
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>Technical</option>
                <option value={2}>Management</option>
                <option value={3}>Both</option>
              </Select>
            </FormControl>
            <TextField 
                id="skills"
                label="Skills"
                placeholder="About Your Self"
                multiline
                variant="outlined"
                onChange={this.updateInput}
                value={this.state.skills} />
            <br/>
            <FormControl >
                <InputLabel htmlFor="my-input">Interest</InputLabel>
                <Input id="interest" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="my-input">WorkShops</InputLabel>
                <Input id="workshops" aria-describedby="my-helper-text" />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                 Submit
             </Button>
  
            </form>
        </div>
    )
}
  }
export default Profile;

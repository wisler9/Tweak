import React,  {Component} from 'react';

class Profile extends Component {
    state = {
      Name: "",
      Bio:"",
      Tweak: "",
      Tweaks: [previousState.tweaks.concat(previousState.tweak)]
    };
  
    // componentDidMount() {
    //   this.loadTweaks()
    // }
  
    handleSubmit = event => {
     
      this.setState((previousState) => {
        return {
          Name: this.state.name,
          Bio: this.state.bio,
          Tweak: this.state.tweak,
          Tweaks: [previousState.tweaks.concat(previousState.tweak)]
        }
        
      })
    };
  
    handleInputChange = event => {
      const {Name:value, Bio:value, Tweak:value,[Tweaks]: value}  = event.target;
      // console.log(name, value)
      this.setState({
        name: this.state.name,
        bio: this.state.bio,
        tweaks: this.state.tweaks
      });
    };



render(){
    return (
        <div className="card bg-dark text-white">
            <img src="..." className="card-img" alt="..."/>
            {/* <h5 className="card-title">Tweak Title</h5> */}
            <div className="form-group">
            <textarea value={props.value} className="form-control" rows="5" name="tweak" onChange={props.onChange}/>
            <button className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
            </div>
        </div>
    );
};
}

export default Profile;
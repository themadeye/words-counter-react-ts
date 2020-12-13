import React from 'react';

interface IState {
  currentContent: string;
  count: []
}

export class Form extends React.Component<{}, IState>{
  constructor(props: any){
    super(props);
    this.state = {
      currentContent : "",
      count: []
    }
  }

  handleSortAlpha(e: any) {
    e.preventDefault();
    var content = this.state.currentContent;
    const allword = content.split(/\W+/);
    const tempword: any = {};
    const ordered: any = {};
    for(var i = 0; i < allword.length; i++){
      var w = allword[i];
      // is existed
      if(tempword[w]){
        tempword[w] = tempword[w] + 1;
      }else{
        tempword[w] = 1;
      }
    }
    Object.keys(tempword).sort().forEach(function(key) {
      ordered[key] = tempword[key];
    });
    console.log("sorted tempword", tempword);
    this.setState({
      count: ordered
    }, () => console.log('temp count', this.state.count))
  }

  handleSortNumeric(e: any){
    e.preventDefault();
    var content = this.state.currentContent;
    const allword = content.split(/\W+/);
    const tempword: any = {};
    const ordered: any = {};
    for(var i = 0; i < allword.length; i++){
      var w = allword[i];
      // is existed
      if(tempword[w]){
        tempword[w] = tempword[w] + 1;
      }else{
        tempword[w] = 1;
      }
    }
    // const keysSorted = Object.keys(tempword).sort(function(a,b){return tempword[a]-tempword[b]})
    const keysSorted = Object.entries(tempword).sort((a: any,b: any) => a[1]-b[1]);
    console.log(keysSorted);
    for(let i = 0; i < keysSorted.length; i++){
      ordered[keysSorted[i][0]] = keysSorted[i][1];
    }
    console.log(ordered);
    this.setState({
      count: ordered
    }, () => console.log('temp count', this.state.count))
  }

  handleCount(e: any) {
    e.preventDefault();
    var content = this.state.currentContent;
    const allword = content.split(/\W+/);
    const tempword: any = {};

    for(var i = 0; i < allword.length; i++){
      var w = allword[i];
      // is existed
      if(tempword[w]){
        tempword[w] = tempword[w] + 1;
      }else{
        tempword[w] = 1;
      }
    }
    this.setState({
      count: tempword
    }, () => console.log('temp count', this.state.count))
  }

  render(){
    console.log("count state",this.state.count);
    return(
      <div>
        <h1>Words counter in React with Typescript</h1>
        <form>
          <textarea 
            placeholder="Add some text here" 
            value={this.state.currentContent}
            onChange={(e) => this.setState({ currentContent: e.target.value})}
          />
          <button type="submit" onClick={(e) => this.handleCount(e)}>Count Words</button>
          <button type="submit" onClick={(e) => this.handleSortAlpha(e)}>Sort Alphabetically</button>
          <button type="submit" onClick={(e) => this.handleSortNumeric(e)}>Sort By Occurences</button>
        </form>
        {Object.entries(this.state.count).map((key, ind)=> {
          return(
            <h3>Word: {key[0]} | Occurences: {key[1]}</h3>
          ) 
        })}
      </div>
    );
  }
}
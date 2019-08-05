import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component{

  state = {
    name: null,
    country: null,
    city: null,
    // requirements: []
    // statistics: [],
    // benefits: [],
    // disadvantages: [],
    // faculties: [],
    history: null,
    priceOfEducation: null,
    priceOfLiving: null,
    briefInfo: null,
    id: null
  }

  onSend() {
    axios.post('http://localhost:3001/api/univers/univers', {
        name: this.state.name,
        country: this.state.country,
        city: this.state.city, 
        history: this.state.history,
        priceOfEducation: this.state.priceOfEducation,
        priceOfLiving: this.state.priceOfLiving,
        briefInfo: this.state.briefInfo
    })
    .then(response => {

    })
    .catch(error => {

    })
  }
render() {
  const { name, country, city, requirements, statistics, benefits, disadvantages, faculties, history, priceOfLiving, priceOfEducation, briefInfo } = this.state;
  
  
  return (
    <>
    <div className="App">
      <div className='area'>
        <p className='title'>Название университета</p>
        <input className='input_area' value={name} onChange={(e) => this.setState({name: e.target.value})}/>
      </div>
      <div className='area'>
        <p className='title'>Страна</p>
        <input className='input_area' value={country} onChange={(e) => this.setState({country: e.target.value})}/>
      </div>
      <div className='area'>
        <p className='title'>Город</p>
        <input className='input_area' value={city} onChange={(e) => this.setState({city: e.target.value})}/>
      </div>
      {/* <div className='area'>
        <p className='title'>Требования</p>
        {requirements.map(item => {
          return (
            <div className='container'>
              <input className='input_area_number' value={item.number}></input>
              <input className='input_area' value={item.info}/>
            </div>
          )
        })}
        <button onClick={() => this.onAddArea()}>Добавить поле</button>
      </div> */}
      {/* <div className='area'>
        <p className='title'>Статистика</p>
        {statistics.map(item => {
          return (
            <div className='container'>
              <input className='input_area_number'></input>
              <input className='input_area'/>
            </div>
          )
        })}
        <button onClick={() => this.onAddArea()}>Добавить поле</button>
      </div>
      <div className='area'>
      <p className='title'>Плюсы университета</p>
        {benefits.map(item => {
          return (
            <div className='container'>
              <input className='input_area_number'></input>
              <input className='input_area'/>
            </div>
          )
        })}
        <button onClick={() => this.onAddArea()}>Добавить поле</button>
      </div>
      <div className='area'>
        <p className='title'>Минусы университета</p>

        {disadvantages.map(item => {
            return (
              <div className='container'>
                <input className='input_area_number'></input>
                <input className='input_area'/>
              </div>
            )
          })}
        <button onClick={() => this.onAddArea()}>Добавить поле</button>
      </div>
      <div className='area'>
      <p className='title'>Факультеты</p>

        {faculties.map(item => {
          return (
            <div className='container'>
              <input className='input_area_number'></input>
              <input className='input_area'/>
            </div>
          )
        })}
        <button onClick={() => this.onAddArea()}>Добавить поле</button>
      </div> */}
      <div className='area'>
        <p className='title'>История</p>
        <textarea value={history} onChange={(e) => this.setState({ history: e.target.value})}/>
      </div>
      <div className='area'>
        <p className='title'>Цена проживания</p>
        <input className='input_area_number' type='number' value={priceOfLiving} onChange={(e) => this.setState({ priceOfLiving: e.target.value})}></input>
      </div>
      <div className='area'>
        <p className='title'>Цена обучения</p>
        <input className='input_area_number' type='number' value={priceOfEducation} onChange={(e) => this.setState({ priceOfEducation: e.target.value})}></input>

      </div> 
      <div className='area'>
        <p className='title'>Краткая информация</p>
        <textarea value={briefInfo} onChange={(e) => this.setState({ briefInfo: e.target.value})}/>
        <button style={{marginTop: '20px', fontSize: '20px', padding: '5px', width: '200px'}}onClick={() => this.onSend()}>Отправить</button>

      </div> 

    </div>

    </>
  );
      }
}

export default App;

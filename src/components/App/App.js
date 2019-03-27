import React, { Component } from 'react';
import Header from '../Header/Header';
import FontBlock from '../FontBlock/FontBlock';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <>
                <Header branding="proto" claim="Font" version="[React]" />
                <FontBlock />
            </>
        );
    }
}

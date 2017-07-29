import * as React from "react";
import  Menu from './Menu';
export interface HelloProps { 
    compiler: string; 
    framework: string; 
}

export default class Index extends React.Component<HelloProps> {
    render (){
        return (
            <Menu />
        )
    }
}

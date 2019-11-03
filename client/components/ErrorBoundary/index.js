import { Component } from 'react'

import dynamic from 'next/dynamic'

import { search$ } from 'libs/helpers'

const Error = dynamic(() => import("components/error"))

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            isError: false
        }
    }

    static getDerivedStateFromError() {
        return { isError: true }
    }

    componentDidCatch(error, errorInfo){
        console.log(error)
        console.log(errorInfo)
    }

    render(){
        if(this.state.isError) return <Error />
        return this.props.children
    }
}

export default ErrorBoundary
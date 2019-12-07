import { Component } from 'react'

import dynamic from 'next/dynamic'

import IErrorState from './types'

const Error = dynamic(() => import("components/error")),
    SearchLayout = dynamic(() => import("layouts/searchLayout"))

class ErrorBoundary extends Component<{}, IErrorState> {
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
        // console.log(error)
        // console.log(errorInfo)
    }

    render(){
        if(this.state.isError) 
            return (
                <SearchLayout>
                    <Error />
                </SearchLayout>
            )

        return this.props.children
    }
}

export default ErrorBoundary
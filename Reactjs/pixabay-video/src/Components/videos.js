import React, { Component } from 'react'

export default class Videos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            isLoading: false,
            fetchedData: []
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (state.url !== props.url) {
            return (state.url = props.url)
        }
        else {
            return null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const url = this.state.url;
        fetch(url)
            .then((res) => {
                return (res.json())
            })
            .then((data) => {
                console.log(data)
                this.setState({ fetchedData: data.hits, isLoading: false })
            })
    }


    render() {
        let videoArray = null;
        if (this.state.fetchedData.length > 0) {
            videoArray = this.state.fetchedData.map((item, index) => {
                // let style = {
                //     width: item.previewWidth,
                //     height: item.previewHeight,
                //     display: 'inline-block',
                // }

                return (
                    <div key={index}>
                        <p>{item.id}</p>
                    </div>
                )
            })
        }
        return (
            {videoArray }
        )
    }
}



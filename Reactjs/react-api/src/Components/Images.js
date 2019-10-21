import React, { Component } from 'react'

export default class Images extends Component {
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
            .then((response) => {
                return (response.json())
            })
            .then((data) => {
                console.log(data)
                this.setState({ fetchedData: data.hits, isLoading: false })
            })
    }

    render() {
        let imageArray = null;
        let loading = null;
        if (this.state.isLoading) {
            loading = <div>
                <h2>is loading is true.....</h2>
                <div className="load-div"></div>
            </div>
        }
        if (this.state.fetchedData.length > 0) {
            imageArray = this.state.fetchedData.map((item, index) => {
                let style = {
                    width: item.previewWidth,
                    height: item.previewHeight,
                    display: 'inline-block',
                }
                return (
                    <div key={index} style={style}>
                        <a href={item.largeImageURL} target = "blank">
                            <img src={item.previewURL} alt={item.tags}></img>
                        </a>
                    </div>
                )
            })
        }
        return (
            <div>
                {loading}
                {imageArray}
            </div>
        )
    }
}

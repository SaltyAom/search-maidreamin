import { FC, useState, useEffect, Fragment } from 'react'

import Head from 'next/head'

import { connect } from 'react-redux'

import preImage from 'pre-image'

import ITab from './types'

import './tab.styl'

// const mapStateToProps = (props) => ({
//     store: {
//         guide: props.guide
//     }
// })

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
    dispatch: {
        updateGuide: (active) => dispatch({
            type: "UPDATE_GUIDE",
            payload: {
                guide: {
                    isActive: active
                }
            }
        })
    }
})

export const Tab:FC<ITab> = ({ dispatch }) => {
    let { updateGuide } = dispatch

    let [tab, setTab] = useState(0)

    let context = {
        image: [
            "/guide/guide_introduction.svg", 
            "/guide/guide_search.svg", 
//            "/guide/guide_install",
            "/guide/guide_done.svg"
        ],
        title: [
            "Welcome to Search Dreamin", 
            "Search any menu", 
//            "Add to Homescreen", 
            "Everything is now ready"
        ],
        detail: [
            "Hello and welcome to Search Dreamin! An unofficial web app for searching menu from Maidreamin MBK~", 
            "With Search Dreamin you're freely to view and search menu anytime! There's no limit of menu now.",
//           "Easily viewing menu like any other app you use! ",
            "Now you're ready to use Search Dreamin and prepare your menu from anywhere~ Let's start!"
        ]
    }

    useEffect(() => {
        context.image.forEach((guide) => preImage(guide));
        ["/img/expand_less.svg", "/img/highlight_off.svg", "/img/notes.svg", "/img/search.svg"].forEach((icon) => preImage(icon))
    }, [])

    return (
        <Fragment>
            <Head>
                <title>Search Dreamin</title>
            </Head>
            <article id="tab">
                <section id="tab-body">
                    <figure className="figure">
                        <img className="image" src={context.image[tab]} alt={context.title[tab]} />
                    </figure>
                    <div className="content">
                        <h2 className="title">{context.title[tab]}</h2>
                        <p className="detail">
                            {context.detail[tab]}
                        </p>
                    </div>
                </section>
                <footer id="tab-footer">
                    { tab < (context.title.length - 1) ?
                        <button className="button" onClick={() => setTab(tab + 1)}>
                            Next
                        </button>
                        : 
                        <button className="button" onClick={() => updateGuide(false)}>
                            Done
                        </button>
                    }
                </footer>
            </article>
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)
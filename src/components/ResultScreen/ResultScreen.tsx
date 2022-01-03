import React from 'react';
import css from './ResultScreen.module.scss'
import {LikeButton} from "../LikeButton/LikeButton";
import resultLogoImg from '../../assets/img/729205330_2.png'

export const ResultScreen = () => {
    return (
        <section className={css.result_box}>


            <div className={css.left_box}>

                <article className={css.left_box_text}>
                    <h1 className={css.result_header_text}>3/8 Not bad</h1>
                    <p className={css.text_level_1}>The result is not very high, but you can easily improve it — read
                        our articles and practice.
                    </p>
                    <p className={css.text_level_2}>We wish you productive trading!</p>
                    <p className={css.text_level_3}>We wish you productive trading!</p>
                </article>

                <div className={css.like_wrapper}>
                    <LikeButton/>
                </div>

            </div>


            <figure className={css.right_box}>
                <img src={resultLogoImg} className={css.img} alt='Result Image'/>

            </figure>


        </section>
    );
};

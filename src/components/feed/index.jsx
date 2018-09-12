import React, {Component} from 'react';
import {connect} from "react-redux";
import styles from './style.scss';
import {Footer} from '../footer';
import Textarea from "react-textarea-autosize";

import {addNewAd, removeAd} from "../../actions/feed";

class FeedUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowNewAsForm: false,
            title: '',
            description: '',
            phone: '+79',
            isValidTitle: false,
            isValidPhone: false,
            check: false,
        };
        this.removeAd = this.removeAd.bind(this);
        this.showNewAdForm = this.showNewAdForm.bind(this);
        this.addNewAd = this.addNewAd.bind(this);
        this.cancelAdding = this.cancelAdding.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changePhone = this.changePhone.bind(this);
    };

    componentWillMount() {
        this.setState({
            isShowNewAsForm: false,
            title: '',
            description: '',
            phone: '+79',
            isValidTitle: false,
            isValidPhone: false,
            check: false,
        });
    }

    removeAd(index) {
        this.props.removeAd(index);
    }

    showNewAdForm() {
        this.setState({isShowNewAsForm: true});
    }

    addNewAd() {
        let re = /[+][7][9]([0-9]{9})$/;
        this.setState({check: true});
        if (re.test(this.state.phone)) {
            this.setState({isValidPhone: true});
        } else {
            this.setState({isValidPhone: false});
        }
        if (this.state.title.length > 0) {
            this.setState({isValidTitle: true});
        } else {
            this.setState({isValidTitle: false});
        }

        if (this.state.isValidPhone && this.state.isValidTitle){
            this.props.addNewAd(this.state.title,this.state.description,this.state.phone);
            this.cancelAdding();
        }


    }

    cancelAdding() {
        this.setState({
            isShowNewAsForm: false,
            title: '',
            description: '',
            phone: '+79',
            isValidTitle: false,
            isValidPhone: false,
            check: false,
        });
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value,
        })
    }

    changePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }


    render() {
        return (
            <div className={styles.fullPageBack}>
                <div className={styles.fullPageContent}>
                    <div className={styles.fullPage}>
                        {this.props.ads.map((ad, index) =>
                            <div key={index} className={styles.adComponent}>
                                <AdCard ad={ad}/>
                                <div className={styles.navigatePanel}>
                                    <div className={styles.removeButton}
                                         onClick={() => this.removeAd(index)}>
                                        Удалить
                                    </div>
                                </div>
                            </div>
                        )}
                        {!this.state.isShowNewAsForm ?
                            <div className={styles.newAd}
                                 onClick={() => this.showNewAdForm()}>
                                Новое объявление
                            </div> :
                            <div className={styles.newAdForm}>
                                <div className={styles.mainForm}>
                                    {(!this.state.isValidTitle && this.state.check) ?
                                        <div className={styles.error}>
                                            Введите название объявления!
                                        </div> : ""}
                                    {(!this.state.isValidPhone && this.state.check) ?
                                        <div className={styles.error}>
                                            Введите коректный телефон! В формате +79171234567
                                        </div> : ""}
                                    <div className={styles.mainFormFieldTitle}>
                                        Название
                                    </div>
                                    <input className={styles.mainFormInputField}
                                           type="text"
                                           maxLength={100}
                                           onChange={e => this.changeTitle(e)}
                                           value={this.state.title}
                                           required="required"/>
                                    <div className={styles.mainFormFieldTitle}>
                                        Описание
                                    </div>
                                    <Textarea className={styles.mainFormDescriptionField}
                                              maxLength={300}
                                              onChange={e => this.changeDescription(e)}
                                              value={this.state.description}/>
                                    <div className={styles.mainFormFieldTitle}>
                                        Телефон
                                    </div>
                                    <input className={styles.mainFormInputField}
                                           type="tel"
                                           maxLength={12}
                                           onChange={e => this.changePhone(e)}
                                           value={this.state.phone}
                                           required="required"/>

                                </div>
                                <div className={styles.navigatePanel}>
                                    <div className={styles.addButton}
                                         onClick={() => this.addNewAd()}>
                                        Добавить
                                    </div>
                                    <div className={styles.removeButton}
                                         onClick={() => this.cancelAdding()}>
                                        Отмена
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const AdCard = ({ad}) => (
    <div className={styles.ads}>
        <div className={styles.title}>
            {ad.title}
        </div>
        <div className={styles.description}>
            {ad.description}
        </div>
        <div className={styles.phone}>
            Телефон: {ad.phone}
        </div>
    </div>
);


export const Feed = connect(
    store => ({
        ads: store.ads,
    }),
    dispatch => ({
        removeAd(index) {
            dispatch(removeAd(index));
        },
        addNewAd(title,description,phone) {
            dispatch(addNewAd(title,description,phone));
        }
    })
)(FeedUI);
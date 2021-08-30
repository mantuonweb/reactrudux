import React from 'react';
import { connect } from 'react-redux';
import { year, landed, launched } from '../../filters/filter.slice';
import { fetchSatellites } from '../satellite/satellite.slice';
import './launch-filter.component.scss';
interface Year {
    left: number | undefined;
    right: number | undefined;
}
class LaunchFilterComppnent extends React.Component {
    years: Year[] = [];
    currentLand:number|undefined;
    currentLaunch:number|undefined;
    currentYear:number|undefined;

    constructor(public props: any) {
        super(props);
        this.getYears();
    }
    getYears() {
        let years = [];
        let curYear = new Date().getFullYear();
        for (let y = 2006; y <= curYear; y++) {
            years.push(y);
        }
        let arrLen = years.length;
        for (let i = 0; i < arrLen; i = i + 2) {
            this.years.push({
                left: years[i],
                right: 1 + i < arrLen ? years[1 + i] : undefined
            });
        }
    }
    year(year: number | undefined) {
        this.props.year(year);
        this.reloadSatellites();
    }
    landed(isLanded: boolean) {
        this.props.landed(isLanded);
        this.reloadSatellites();
    }
    launched(isLaunched: boolean) {
        this.props.launched(isLaunched);
        this.reloadSatellites();
    }
    reloadSatellites() {
        setTimeout(()=>{
            this.props.fetchSatellites(this.props.filters);
        });
    }
    render() {
        return <>
            <div className="card">
                <h5 className="card-title title-text">Filters</h5>
                <div className="card-body">
                    <div className="filter-title text-center">
                        Launch Year
                    </div>
                    {this.years.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="clearfix filter-action">
                                    <button type="button" className={`btn btn-success first float-left ${this.props?.filters?.year===item.left?'active':''}`} onClick={() => {
                                        this.year(item.left);
                                    }}>{item.left}</button>
                                    <button type="button" className={`btn btn-success second float-right ${this.props?.filters?.year===item.right?'active':''}`} onClick={() => {
                                        this.year(item.right);
                                    }}>{item.right}</button>
                                </div>
                            </div>
                        )
                    })}

                    <div className="filter-title text-center">
                        Successful Launch
                    </div>
                    <div>
                        <div className="clearfix filter-action">
                            <button type="button" className={`btn btn-success first float-left ${this.props?.filters?.launched===true?'active':''}`} onClick={() => {
                                this.launched(true);
                            }}>True</button>
                            <button type="button" className={`btn btn-success second float-right ${this.props?.filters?.launched===false?'active':''}`} onClick={() => {
                                this.launched(false);
                            }}>False</button>
                        </div>
                    </div>
                    <div className="filter-title text-center">
                        Successful landing
                    </div>
                    <div>
                        <div className="clearfix filter-action">
                            <button type="button" className={`btn btn-success first float-left ${this.props?.filters?.landed===true?'active':''}`} onClick={() => {
                                this.landed(true);
                            }}>True</button>
                            <button type="button" className={`btn btn-success second float-right ${this.props?.filters?.landed===false?'active':''}`} onClick={() => {
                                this.landed(false);
                            }}>False</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = (state: any) => {
    const props = { filters: state.filters, ...state.satellites };
    return props;
}
export default connect(mapStateToProps, { launched, landed, year, fetchSatellites })(LaunchFilterComppnent)
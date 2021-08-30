import React from 'react';
import { connect } from 'react-redux'
import LaunchFilterComppnent from './launch-filter.component/launch-filter.component';
import LaunchesComppnent from './launches.component/launches.component';
import { fetchSatellites } from './satellite/satellite.slice';
import './home.component.scss';

class HomeComppnent extends React.Component {
    loading = false;
    error = false;
    norecord = false;
    constructor(public props: any) {
        super(props);
    }
    mapStateToProps() {

    }
    loadSatellites() {
        this.props.fetchSatellites(this.props.filters);
    }
    componentDidMount() {
        this.loadSatellites();
    }
    render() {
        return <>

            {
                this.props.loading && (
                    <div className="text-center loader" >
                        <div className="spinner-border text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }


            <div className="clearfix">
                <div className="filter float-sm-left">
                    <div className="filter">
                        <LaunchFilterComppnent></LaunchFilterComppnent>
                    </div>
                </div>
                <div className="mission float-sm-right">
                    <div>
                        <LaunchesComppnent></LaunchesComppnent>
                    </div>
                </div>
            </div>
            {
                  this.props && this.props.satellites && this.props.satellites.length===0 && (
                    <div className="no-record-found" >
                        No records found
                    </div>
                )
            }

            {
                this.props.error && (
                    <div className="error-in-records" >
                        <span>Error in loading Records</span>
                    </div>
                )
            }
        </>
    }
}
const mapStateToProps = (state: any) => {
    const props = { filters: state.filters,...state.satellites };
    return props;
}
export default connect(mapStateToProps, { fetchSatellites })(HomeComppnent)
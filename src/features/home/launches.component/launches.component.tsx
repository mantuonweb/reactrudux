import React from 'react';
import { connect } from 'react-redux';
import { Satellite } from '../../../models/models';
import LaunchComppnent from './launch.component/launch.component';
import './launches.component.scss';
class LaunchesComppnent extends React.Component {
    launch: any = {};
    constructor(public props: any) {
        super(props);

    }
    render() {
        return <>
            <div className="flex-container wrap">
                {
                    this.props.satellites.map((satellite: Satellite,index:number) => {
                        return (
                            <div key={index} className="d-flex launch-item flex-item has-right-margin">
                                <LaunchComppnent launch={satellite}></LaunchComppnent>
                            </div>
                        );
                    })
                }

            </div>

        </>
    }
}
const mapStateToProps = (state: any) => {
    const props = { filters: state.filters, ...state.satellites };
    return props;
}
export default connect(mapStateToProps, {})(LaunchesComppnent)
import React from 'react';
import './launch.component.scss';
export default class LaunchComppnent extends React.Component {
    loading = true;
    state: { loading: boolean; };
    imageStyle={
        height:'360px'
    }
    constructor(public props: any) {
        super(props);
        this.state = { loading: true };
        this.onLoad = this.onLoad.bind(this);
    }
    onLoad() {
        this.setState({ loading: false })
    }
    render() {
        return <>
            <div className="card">
                <div className="img-container text-center" style={this.imageStyle}>
                    {
                        this.state.loading && (
                            <div >
                                <img className="center"
                                
                                    alt="Loading the Logo" 
                                    src="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjguMDQyJSIgeTE9IjAlIiB4Mj0iNjUuNjgyJSIgeTI9IjIzLjg2NSUiIGlkPSJhIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAiIHN0b3Atb3BhY2l0eT0iLjYzMSIgb2Zmc2V0PSI2My4xNDYlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAiIG9mZnNldD0iMTAwJSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiIGlkPSJPdmFsLTIiIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgICAgICAgICBmcm9tPSIwIDE4IDE4IgogICAgICAgICAgICAgICAgICAgIHRvPSIzNjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgZHVyPSIwLjlzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjM2IiBjeT0iMTgiIHI9IjEiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjAuOXMiCiAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                />
                            </div>
                        )
                    }

                    <img
                        className="card-img-top"
                        style={this.imageStyle}
                        hidden={this.state.loading}
                        onLoad={this.onLoad}
                        src={this.props?.launch?.icon}
                        alt={this.props?.launch?.missionName}
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title title-text">{this.props?.launch?.missionName}</h5>
                    <b>Mission ids:</b><br />
                    <ul className="mission-ids">
                        {
                            this.props?.launch?.missionId.map((id: number, index: number) => {
                                return (
                                    <li key={index}>
                                        <span className="value-text">{id}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <b>Launch year:</b><span className="value-text">{this.props?.launch?.launchYear}</span
                    ><br />
                    <b>Successful Launch:</b><span className="value-text">{this.props?.launch?.isSuccess}</span
                    ><br />
                    <b>Successful Landing:</b
                    ><span className="value-text">{this.props?.launch?.launchLanding}</span><br />
                </div>
            </div>

        </>
    }
}
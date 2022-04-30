import react, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Summary from "../../components/summary/summary/Summary";
import VaccinationSummary from "../../components/summary/vaccination-summary/VaccinationSummary";
import { loadAllData } from "../../redux/actions/UpdatesAction";
import { RootState } from "../../redux/store/Store";
import { UpdateAction } from "../../redux/types/UpdatesType";
import './home.css';

interface Props {
    loadData: typeof loadAllData;
}


class Home extends Component<Props>{
    constructor(props: any) {
      super(props);
    }

    componentDidMount = () => {
        this.props.loadData();
    }
    
    render = () => (
        <section className="homepage">
            <h1>Indonesian Covid-19 Summary</h1>
            <p>The unofficial Indonesian data and insight on Coronavirus (COVID-19)</p>

            <VaccinationSummary />
            <Summary />
        </section>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<UpdateAction>) => {
    return {
        dispatch,
        ...bindActionCreators({
            loadData: () => loadAllData()
        },
        dispatch),   
    }
};

export default connect(null, mapDispatchToProps)(Home);
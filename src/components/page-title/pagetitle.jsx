import './pagetitle.css';
import BpSvg from '../bp-svg/bpSvg'

const PageTitle = ({title}) => {
    return (
        <div className="pageTitle">
            <BpSvg />
            <h1>{title}</h1>
        </div>
    );
};

export default PageTitle;

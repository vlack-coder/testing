import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./AnalysisHistory.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { IoMdAnalytics } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import AnaData from "./analysisData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAnalysisHistory, postVideo } from "../../actions/analysis";
import { getAnalysis } from "../../actions/analysis";
import { CSVLink } from "react-csv";
import sumArray from "../VideoAnalysis/TeamMetrics/io";

function AnalysisHistory() {
 return (<div>yes</div> )
}

export default AnalysisHistory;

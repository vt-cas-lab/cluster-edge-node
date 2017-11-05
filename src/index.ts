import { config } from "dotenv";
config({ path: "../.env" });

const easyMonitor = require("easy-monitor");
//easyMonitor("edgeNode");

if (!process.env.UUID) {
    process.env.UUID = require("uuid/v4")();
    console.log("New UUID for edge is " + process.env.UUID);
}

import { cleandb } from "./storage.js";
cleandb();
import { startOSMonitoring } from "../../cluster-common/common/utils/os";
startOSMonitoring();

import Chairo = require("chairo");
import Hapi = require("hapi");

import rest_routes = require("./api.js");
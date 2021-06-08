// configure the editor using the manifest
import { Configurator } from "@pfeditor/editor/Configurator";
import { TestParams } from '@pfeditor/editor/doc/TestParams';
import { theme } from "@pfeditor/styles/classic";
import "@pfeditor/styles/classic.css";
import manifest from "manifest";
import { srcTestParams } from './src/srcTestParams';

const configurator = new Configurator();
configurator.configure(manifest, theme);
TestParams.setParams(srcTestParams);
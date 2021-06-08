import manifest from "manifest";
import { AppConfigurator, IAppConfigurator } from "@src/common/config/AppConfigurator";
import { ClientEditorBase } from "@pfeditor/editor/ClientEditorBase";
import { Company, User } from "@pfeditor/server-api";
import { defs } from "@src/DanaherDefs";

export const globals = {
    user: new User(),
    company: new Company(),
    config: {
        general: { creator: AppConfigurator, value: {} as IAppConfigurator }
    }
};

export class DanaherEditor extends ClientEditorBase {

    constructor() {
        super(globals);
        const docDef = this.createDocumentDefinition(defs.colors, defs.fonts);

        //SAC
        this.setupAppConfigurator({ docDef: docDef });
        //templates

    }

}
import { AppConfigurator, IAppConfigStorage } from "@pfeditor/editor/configurator/AppConfigurator";
import { IEmptyTableRowItem, ITableControlItem, TableControl } from "@pfeditor/editor/configurator/controls/TableControl";
import { LanguageManager } from "@pfeditor/editor/doc/LanguageManager";
import { LdtTextInput } from "@pfeditor/editor/configurator/controls/LdtTextInput";
import { LdtUtils } from "@pfeditor/editor/configurator/utils/LdtUtils";

export interface IAppConfigurator extends IAppConfigStorage {
    text: string;
    table: ITableItem;
}
interface ITableItem extends ITableControlItem {
    rows: ITableRowItem[];
}
export interface ITableRowItem extends IEmptyTableRowItem {
    text: string;
}

export class AppConfigurator extends AppConfigurator<IAppConfigurator> {

    static configName = "general";
    static configTitle = "Configurator";

    constructor() {
        super();

        this.setupLanguages([LanguageManager.languages.english, LanguageManager.languages.norwegian], LanguageManager.languages.english.name);
    }

    protected getDefaults(): IAppConfigurator {
        return {
            text: LdtUtils.createString({ [LanguageManager.languages.english.name]: "text here", [LanguageManager.languages.norwegian.name]: "tekst her" }),
            table: { defaultRowName: "", rows: [] }
        };
    }

    getElementControls() {
        return [
            new LdtTextInput({
                label: "Text",
                value: this.storageItem.text,
                clb: val => {
                    this.storageItem.text = val;
                    this.createUndo("Text", { replaceLast: true });
                }
            }),
            new TableControl<ITableItem>({
                columnDefs: [
                    {
                        label: "Some label",
                        controlCreator: (row) => new LdtTextInput({
                            value: row.text,
                            clb: (val) => {
                                row.text = val;
                                this.createUndo("Some label", { replaceLast: true });
                            }
                        }),
                    }
                ],
                createDefaultRowValue: () => ({
                    text: LdtUtils.createString({ [LanguageManager.languages.english.name]: "text here", [LanguageManager.languages.norwegian.name]: "tekst her" })
                }),
                storageItem: this.storageItem.table,
                createUndo: (label: string) => this.createUndo(label)
            })
        ];
    }
}
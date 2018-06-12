/*eslint no-undef: "error"*/
/*eslint-env node*/
import {wpClientFactory} from "./wpClientFactory";
import {ProLocalSettingClient} from "./ProLocalSettingClient";
import {PrivacySettingsClient} from "./PrivacySettingsClient";
import {WpClient} from "./WpClient";
import {FormsClient} from "./FormsClient";

module.exports = {
	wpClientFactory,
	PrivacySettingsClient,
	ProLocalSettingClient,
	WpClient,
	FormsClient
};
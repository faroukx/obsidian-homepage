import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { type } from 'os';

// Remember to rename these classes and interfaces!

interface Reminder {
	remindMe: number;
}

const DEFAULT_SETTINGS: ReminderSettings = {
	remindMe: 7
}

export default class MyPlugin extends Plugin {
	settings: ReminderSettings;

	async onload() {
		await this.loadSettings();

		// 	//This creates an icon in the left ribbon.
		// const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
		// 	// Called when the user clicks the icon.
		// 	new Notice('小鹰生日还有6天！');
		// });
		// // Perform additional things with the ribbon
		// ribbonIconEl.addClass('my-plugin-ribbon-class');

		// });
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'create-countdown-in-current-file',
			name: 'Create Countdown in Current File',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const files = app.vault.getMarkdownFiles();
				
				console.log(editor.getSelection());
				editor.replaceSelection(`<p class="stickies";><b>COUNTDOWN</b><br>`);

				let count = 0;
				let remindMeIn:number = this.settings.remindMe;

				for (var ita=0;ita<files.length;ita++){
					let today = new Date();
					let year = today.getFullYear();
					let yearString = year.toString();
					const basename = files[ita].basename;
					const meta = this.app.metadataCache.getFileCache(files[ita]).frontmatter
					if (typeof(meta) !="undefined"){
						const birthday = this.app.metadataCache.getFileCache(files[ita]).frontmatter.birthday;
						if (birthday){
							
							let birthdaySlice = birthday.slice(4);
							let nextBirthdayString = yearString+birthdaySlice;
							let nextBirthdayNumber = new Date(nextBirthdayString);
							let diffBetween = Math.floor((nextBirthdayNumber-today)/3600000/24);
							let N = 0;

							diffBetween>0? N = diffBetween:N = diffBetween+365;
							
							if (N < remindMeIn){
								count = count+1;
								console.log(editor.getSelection());
								editor.replaceSelection(`${basename}生日还有${N}天!<br>`);
							}
						}
					}

					
				}
				if (count==0){
					console.log(editor.getSelection());
					editor.replaceSelection(`最近${remindMeIn}天没有生日!`);
				}
				editor.replaceSelection(`<!-- --- --></p><br>`);
				
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}



class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Birthday Countdown Settings'});

		new Setting(containerEl)
			.setName('提醒范围设在几天之内？')
			.setDesc('你可以选择3天，7天，365天……')
			.addText(text => text
				.setPlaceholder('输入一个数字')
				.setValue(this.plugin.settings.remindMe)
				.onChange(async (value) => {
					console.log('提醒天数 ' + value);
					this.plugin.settings.remindMe = value;
					await this.plugin.saveSettings();
				}));
	}
}

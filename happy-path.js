const { When, Then } = require('cucumber');
const path = require('path');

const { PageObject } = require('../../../../app/pageObject');
const { log } = require('../../../../app/logger');
const ScenarioData = require('../../../../app/scenarioData');
const StringProcessing = require('../../../../app/stringProcessing');
var fieldValue;
// Scenario setup
let pages = {
    authProducer: new PageObject('auth-media-producer.json', path.join(__dirname, '/'))
}

When('I click the create_course button to create course', async function(){
  try {
    log.debug('Clicking on create course button');
    await pages.authProducer.populate('create_course', 'click', );
    log.debug(`create course button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }
});
When('save the value to variable', async function(dataTable){
  try {
    
    fieldValue = dataTable;
    log.debug(`I populated table`);
    log.debug(dataTable.raw());
    log.debug('I printed table');
    var keys = Object.keys(dataTable);
    keys.forEach(async function(key){
      console.log(key, dataTable[key]);
      await pages.authProducer.populate(key, dataTable[key]);
    });
  } catch (err) {
    log.error(err.stack);
  }
});
When('I elect to create a course with the following data:', async function(){
    /*try {
      var dictionary = {
      course_type:'Template',
      product_model: 'Read & Practice'
     }
   }
   catch (err) {
     log.error(err.stack);
   }
    const that = {
      ScenarioData: ScenarioData
    };
    
    try {
      let sp = StringProcessing(that.ScenarioData);
      sp.populateData(dictionary);
    }catch (err) {
      log.error(err.stack);
    }*/
    //await pages.authProducer.populateTable(fieldValue);

    await pages.authProducer.populate('course_type', 'Template');
    log.debug(`I selected Template course type`);
    log.debug(fieldValue.rows());
    await pages.authProducer.populate('product_model', 'Read & Practice');
    log.debug('I have selected Read & Practice');
    await pages.authProducer.populate('course_name', 'TestCourse');
    log.debug('I have input course name');
    await pages.authProducer.populate('course_code', 'TST 101');
    log.debug('I have given course code');
    await pages.authProducer.populate('isbn_number', '9781464199495');
    log.debug('I have given isbn');
    await pages.authProducer.populate('course_status', 'Draft');
    log.debug('I have selected Draft course Status');
    try {
      log.debug('Clicking on save button');
      await pages.authProducer.populate('save_button', 'click' );
      log.debug(`create course button was clicked: ${clickedButton}`);
    } catch (err) {
      log.error(err);
    }
});

Then('I create a folder named on the resources screen', async function(){
  try {
    log.debug('Clicking on course card');
    await pages.authProducer.populate('card_name', 'click', 'resources_tab' );
    log.debug(`create course card was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on resources tab');
    await pages.authProducer.populate('resources_tab', 'click' );
    log.debug(`create resource tab was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 1');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 2');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }
});

Then('I will add the following content to the resource page:', async function(){
  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 1. Introduction and Research Methods');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 1. Background to the Study of Psychology');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 1. The People and the Field');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking on add folder');
    await pages.authProducer.populate('add_folder', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  await pages.authProducer.populate('folder_name', 'Chapter 2: North America');

  try {
    log.debug('Adding folder');
    await pages.authProducer.populate('add_folder_button', 'click' );
    log.debug(`create add folder was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }
});

Then('I move the activity named to the folder named', async function() {
  try {
    log.debug('Clicking options button');
    await pages.authProducer.populate('options_button', 'click' );
    log.debug(`options button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking move item button');
    await pages.authProducer.populate('move_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Select chapter 2 from the list');
    await pages.authProducer.populate('chapter_2', 'click' );
    log.debug(`Chapter 2 was selected: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking place item button');
    await pages.authProducer.populate('place_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking options button');
    await pages.authProducer.populate('options_button', 'click' );
    log.debug(`options button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking move item button');
    await pages.authProducer.populate('move_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Select chapter 1 from the list');
    await pages.authProducer.populate('chapter_2', 'click' );
    log.debug(`Chapter 1 was selected: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking place item button');
    await pages.authProducer.populate('place_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking options button');
    await pages.authProducer.populate('options_button', 'click' );
    log.debug(`options button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking move item button');
    await pages.authProducer.populate('move_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Select chapter 1 from the list');
    await pages.authProducer.populate('chapter_1_3', 'click' );
    log.debug(`Chapter 1 was selected: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking place item button');
    await pages.authProducer.populate('place_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking options button');
    await pages.authProducer.populate('options_button', 'click' );
    log.debug(`options button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking move item button');
    await pages.authProducer.populate('move_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Select chapter 1 from the list');
    await pages.authProducer.populate('chapter_1_4', 'click' );
    log.debug(`Chapter 1 was selected: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking place item button');
    await pages.authProducer.populate('place_item_button', 'click' );
    log.debug(`Move item button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }
});
Then('I reorder the items on the course resource page to be in this order:', async function() {
  try {
    log.debug('Clicking options button');
    await pages.authProducer.populate('options_button', 'click' );
    log.debug(`options button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking reorder button');
    await pages.authProducer.populate('reorder_button', 'click' );
    log.debug(`Reorder button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking move down button');
    await pages.authProducer.populate('move_down_button', 'click' );
    log.debug(`Move down button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }

  try {
    log.debug('Clicking save button');
    await pages.authProducer.populate('save_reordered_button', 'click' );
    log.debug(`Save button was clicked: ${clickedButton}`);
  } catch (err) {
    log.error(err);
  }
});


;
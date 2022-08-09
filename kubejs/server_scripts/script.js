// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	
	// remove all recipes to andesite alloy
	event.remove({output: 'create:andesite_alloy'})
	// add a shapeless recipe to andesite alloy
	event.shaped( '2x create:andesite_alloy', [
		'AB',
		'BA'
	],{
		A: 'minecraft:andesite',
		B: 'tconstruct:seared_brick'
	})
	event.shaped( '2x create:andesite_alloy', [
		'BA',
		'AB'
	],{
		A: 'minecraft:andesite',
		B: 'tconstruct:seared_brick'
	})

	// tconstruct:grout recipe change
	event.remove({output: 'tconstruct:grout'})
	event.shapeless('2x tconstruct:grout', ['minecraft:coarse_dirt', 'minecraft:clay_ball'])

	// removes
	event.remove({output: 'industrialforegoing:machine_frame_pity'})
	event.remove({output: 'industrialforegoing:machine_frame_simple'})
	event.remove({output: 'industrialforegoing:machine_frame_advanced'})
	event.remove({output: 'industrialforegoing:machine_frame_supreme'})
	event.remove({output: 'create:andesite_casing'})
	event.remove({output: 'create:copper_casing'})
	event.remove({output: 'create:brass_casing'})
	event.remove({output: 'create:shadow_steel_casing'})
	event.remove({output: 'create:refined_radiance_casing'})
	event.remove({output: 'createaddition:overcharged_casing'})
	event.remove({output: 'rftoolsbase:machine_frame'})
	event.remove({output: 'boss_tools:engine_frame'})
	event.remove({output: 'mekanism:teleporter_frame'})
	event.remove({output: 'cyclic:mason_plate'})
	event.remove({output: 'create:sail_frame'})
	event.remove({output: 'mysticalagriculture:machine_frame'})
	event.remove({output: 'thermal:energy_cell_frame'})
	event.remove({output: 'thermal:machine_frame'})
	event.remove({output: 'thermal:fluid_cell_frame'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
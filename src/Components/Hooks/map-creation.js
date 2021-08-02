import kaboom from "kaboom";
// import asepritePlugin from "kaboom/plugins/aseprite";

function CreateMap() {
    // const plugin = asepritePlugin;

    const k = kaboom({
        global: true,
        fullscreen: true,
        scale: 1,
        debug: true,
        // plugins: [ plugin, ],
    });
    
    k.loadRoot('../Textures/');
    k.loadSprite('brick', 'brick.png');
    k.loadSprite('nature_1', 'nature_1.png');
    k.loadSprite('nature_2', 'nature_2.png');
    k.loadSprite('nature_3', 'nature_3.png');
    k.loadSprite('nature_4', 'nature_4.png');
    k.loadSprite('nature_5', 'nature_5.png');
    k.loadSprite('nature_6', 'nature_6.png');
    k.loadSprite('nature_7', 'nature_7.png');
    k.loadSprite('nature_8', 'nature_8.png');
    k.loadSprite('nature_9', 'nature_9.png');
    k.loadSprite('nature_10', 'nature_10.png');
    k.loadSprite('nature_11', 'nature_11.png');
    k.loadSprite('nature_12', 'nature_12.png');
    k.loadSprite('wall_1', 'wall_1.png');
    k.loadSprite('wall_2', 'wall_2.png');
    k.loadSprite('wall_3', 'wall_3.png');
    k.loadSprite('wall_4', 'wall_4.png');
    k.loadSprite('water', 'water.png');
    k.loadSprite('water_2', 'water_2.png');
    k.loadSprite('wood_2', 'wood_2.png');
    k.loadSprite('wood_3', 'wood_3.png');
    k.loadSprite('wood_4', 'wood_4.png');
    k.loadSprite('wood_no_tile', 'wood_no_tile.png');

    k.scene('game', () => {

        k.layers(['bg', 'obj', 'ui'], 'obj');
        
        const map = [
            'qqqqqqqqqqqqqqq',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'q-------------q',
            'qqqqqqqqqqqqqqq',
        ];

        const levelCfg = {
            width: 32,
            height: 32,
            'a': [k.sprite('brick'), k.solid(), k.scale(0.5)],
            'b': [k.sprite('nature_1'), k.scale(0.5) ],
            'c': [k.sprite('nature_2'), k.scale(0.5) ],
            'd': [k.sprite('nature_3'), k.scale(0.5)],
            'e': [k.sprite('nature_4'), k.scale(0.5)],
            'f': [k.sprite('nature_5'), k.scale(0.5)],
            'g': [k.sprite('nature_6'), k.solid(), k.scale(0.5)],
            'h': [k.sprite('nature_7'), k.scale(0.5)],
            'i': [k.sprite('nature_8'), k.scale(0.5) ],
            'j': [k.sprite('nature_9'), k.scale(0.5) ],
            'k': [k.sprite('nature_10'), k.scale(0.5)],
            'l': [k.sprite('nature_11'), k.scale(0.5) ],
            'm': [k.sprite('nature_12'), k.scale(0.5)],
            'n': [k.sprite('wall_1'), k.solid(), k.scale(0.5)],
            'o': [k.sprite('wall_2'), k.solid(), k.scale(0.5)],
            'p': [k.sprite('wall_3'), k.solid(), k.scale(0.5)],
            'q': [k.sprite('wall_4'), k.solid(), k.scale(0.5)],
            'r': [k.sprite('water'), k.scale(0.5)],
            's': [k.sprite('water_2'), k.scale(0.5)],
            't': [k.sprite('wood_2'), k.solid(), k.scale(0.5)],
            'u': [k.sprite('wood_3'), k.solid(), k.scale(0.5)],
            'v': [k.sprite('wood_4'), k.solid(), k.scale(0.5)],
            'w': [k.sprite('wood_no_tile'), k.solid(), k.scale(0.5)],
        }

        k.addLevel(map, levelCfg)

        // add([sprite('bg'), layer('bg')])
    });
    
    k.start('game');
};

export default CreateMap;




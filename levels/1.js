var map = {
	levelBoard: {
		life: 2500,
		duration: 1000,
		backgroundColor: "rgba(0,0,0,0.4)",
		info: [{
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.15
		}, {
			type: "text",
			text: "第一章",
			family: "微软雅黑",
			size: 0.035,
			y: 0.27,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "text",
			text: "阶梯",
			family: "微软雅黑",
			size: 0.07,
			y: 0.37,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "text",
			text: "─────",
			family: "微软雅黑",
			size: 0.02,
			y: 0.45,
			color: "#ffffff",
			weight: "normal"
		}, {
			type: "text",
			text: "在此",
			family: "微软雅黑",
			size: 0.03,
			y: 0.5,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "text",
			text: "我要向",
			family: "微软雅黑",
			size: 0.04,
			y: 0.625,
			color: "#ffffff",
			weight: "normal"
		}, {
			type: "text",
			text: "纪念碑谷致敬",
			family: "微软雅黑",
			size: 0.04,
			y: 0.7,
			color: "#ffffff",
			weight: "normal"
		}, {
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.85
		}]
	},
	blocks: [{
		type: "cube",
		x: 0,
		y: 0,
		z: 0,
		rx: 0,
		ry: 0,
		rz: 0,
		materialId: "m0"
	}, {
		x: 1
	}, {
		x: 2
	}, {
		x: 3
	}, {
		x: 4
	}, {
		x: 5
	}, {
		x: 6
	}, {
		x: 6,
		y: 1
	}, {
		x: 6,
		y: 2
	}, {
		x: 6,
		y: 3
	}, {
		x: 6,
		y: 4
	}, {
		x: 6,
		y: 8,
		z: 4
	}, {
		x: 6,
		y: 8,
		z: 5
	}, {
		x: 6,
		y: 8,
		z: 6
	}, {
		x: 6,
		y: 8,
		z: 7
	}, {
		x: 6,
		y: 8,
		z: 8
	}, {
		type: "tri",
		x: 7,
		y: 8,
		z: 8
	}, {
		type: "tri",
		x: -1,
		rz: Math.PI
	}, {
		x: 2,
		y: 8,
		z: 0
	}, {
		x: 1,
		y: 8,
		z: 0
	}, {
		type: "tri",
		x: 0,
		y: 8,
		z: 0,
		rz: Math.PI
	}, {
		type: "stick",
		x: 6,
		y: 12,
		z: 8,
		d: 0,
		height: 7
	}, {
		type: "stick",
		x: 6,
		y: 12,
		z: 8,
		d: 1,
		height: 7
	}, {
		type: "stick",
		x: 6,
		y: 12,
		z: 8,
		d: 2,
		height: 7
	}, {
		type: "stick",
		x: 6,
		y: 12,
		z: 8,
		d: 3,
		height: 7
	}, {
		x: 6,
		y: 16,
		z: 8
	}, {
		x: 7,
		y: 16,
		z: 8
	}, {
		type: "tri",
		x: 8,
		y: 16,
		z: 8
	}, {
		type: "stair",
		x: 6,
		y: 16,
		z: 7,
		height: 4
	}, {
		type: "plane",
		x: 6,
		y: 20,
		z: 3,
		height: 4
	}, {
		type: "plane",
		x: 6,
		y: 20,
		z: 2,
		height: 4
	}, {
		type: "ground",
		width: 22,
		height: 22,
		x: 3,
		y: -1,
		rx: -Math.PI / 2,
		materialId: "m3"
	}, {
		type: "turntable",
		x: 8,
		y: 8,
		z: 0,
		funcMove: function(e, angle) {
			core.childrenWithId["bridge"].rotation.x = angle;
		},
		funcEnd: function(e, angle) {
			var tmp = angle;
			while(tmp < 0) {
				tmp += 2 * Math.PI;
			}
			core.childrenWithId["bridge"].rotation.x = tmp;
			if(core.childrenWithId["bridge"].rotation.x > Math.PI / 4 * 7) {
				core.childrenWithId["bridge"].rotation.x -= 2 * Math.PI;
			}
			tmp -= Math.PI / 4;
			var quaro = 0;
			while(tmp > 0) {
				quaro++;
				tmp -= Math.PI / 2;
			}
			quaro = quaro % 4;
			if(quaro === 0) {
				tmp = 0;
			} else if(quaro === 1) {
				tmp = Math.PI / 2;
			} else if(quaro === 2) {
				tmp = Math.PI;
			} else if(quaro === 3) {
				tmp = Math.PI * 1.5;
			}
			var time = Math.abs(core.childrenWithId["bridge"].rotation.x - tmp) * 400;
			var tween = new TWEEN.Tween(core.childrenWithId["bridge"].rotation)
				.to({
					x: tmp
				}, time)
				.easing(TWEEN.Easing.Back.Out)
				.start();
		},
		hoopMaterial: "m2",
		poleMaterial: "m2"
	}, {
		type: "group",
		id: "bridge",
		x: 3,
		y: 8,
		z: 0,
		children: [{
			materialId: "m1"
		}, {
			x: 1,
			materialId: "m1"
		}, {
			x: 2,
			materialId: "m1"
		}, {
			x: 3,
			materialId: "m1"
		}, {
			x: 3,
			y: -1,
			materialId: "m1"
		}, {
			x: 3,
			y: -2,
			materialId: "m1"
		}, {
			x: 3,
			y: -3,
			materialId: "m1"
		}]
	}],
	materials: {
		m0: {
			type: "L",
			color: 0x818b89,
			mapId: "img/path/texture0.jpg"
		},
		m1: {
			type: "L",
			color: 0x9ba4a3
		},
		m2: {
			type: "L",
			color: 0x77b0bb
		},
		m3: {
			type: "L",
			color: 0xffffff,
			mapId: "img/level1ground.png"
		}
	},
	textures: ["img/path/texture0.jpg", "img/common/border.png", "img/level1ground.png"],
	lights: {
		areaLight: {
			color: 0x444444,
			type: "A"
		},
		directionLight: {
			color: 0xffffff,
			type: "D",
			intensity: 1,
			position: {
				x: 100,
				y: 400,
				z: 200
			}
		},
		directionLight2: {
			color: 0x555555,
			type: "D",
			intensity: 1,
			position: {
				x: -100,
				y: -400,
				z: -200
			}
		}
	},
	camera: {
		position: {
			x: 1000,
			z: 940,
			y: 1150,
		},
		lookAt: {
			x: 0,
			y: 150,
			z: -60
		}
	},
	path: {
		"p1": {
			id: "p1",
			x: 2,
			y: 1,
			z: 0,
			face: 0,
			neighbors: ["p2","p5"],
			special: {}
		},
		"p2": {
			id: "p2",
			x: 3,
			y: 1,
			z: 0,
			face: 0,
			neighbors: ["p1", "p3"],
			special: {}
		},
		"p3": {
			id: "p3",
			x: 4,
			y: 1,
			z: 0,
			face: 0,
			neighbors: ["p2","p4"],
			special: {}
		},
		"p4": {
			id: "p4",
			x: 5,
			y: 1,
			z: 0,
			face: 0,
			neighbors: ["p3"],
			special: {}
		},
		"p5": {
			id: "p5",
			x: 1,
			y: 1,
			z: 0,
			face: 0,
			neighbors: ["p1","p6"],
			special: {}
		},
		"p6": {
			id: "p6",
			x: 8,
			y: 9,
			z: 8,
			face: 0,
			neighbors: ["p5","p7"],
			special: {}
		},
		"p7": {
			id: "p7",
			x: 7,
			y: 9,
			z: 8,
			face: 0,
			neighbors: ["p6","p8"],
			special: {}
		},
		"p8": {
			id: "p8",
			x: 6,
			y: 9,
			z: 8,
			face: 0,
			neighbors: ["p7","p9"],
			special: {}
		},
		"p9": {
			id: "p9",
			x: 6,
			y: 9,
			z: 7,
			face: 0,
			neighbors: ["p8","p10"],
			special: {}
		},
		"p10": {
			id: "p10",
			x: 6,
			y: 9,
			z: 6,
			face: 0,
			neighbors: ["p9","p11"],
			special: {}
		},
		"p11": {
			id: "p11",
			x: 6,
			y: 9,
			z: 5,
			face: 0,
			neighbors: ["p10","p12"],
			special: {}
		},
		"p12": {
			id: "p12",
			x: 6,
			y: 9,
			z: 4,
			face: 0,
			neighbors: ["p11"],
			special: {}
		}
	},
	startPoint: "p3"
}
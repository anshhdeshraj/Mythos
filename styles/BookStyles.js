const BookStyles = {

    bookContainer:{
        marginVertical:40,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginLeft: 30
    },

    bookCover:{
        backgroundColor: '#c2c2c2',
        width:'40%',
        display: 'flex',
        alignSelf: 'center',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 20,
        shadowColor: 'black',
        shadowOpacity : .2,
        shadowOffset : {width: 0, height: 0},
    },
    bookDetailsContainer:{
        width:'60%'
    },
    inputField:{
        fontSize: 17,
        fontWeight: '700',
        borderBottomWidth: .3,
        borderBottomColor: 'grey',
        width:'80%',
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom: 50
    },
    bookDescField:{
        marginLeft:30
    },
    buttonsContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:120
    },
    postButtons:{
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:5,
        shadowColor: 'black',
        shadowOpacity : .4,
        shadowOffset : {width: 1, height: 1},
        width:120
    },
    postButtonsText:{
        color: '#ffff',
        fontSize:18,
        fontWeight:'800',
        textAlign: 'center'
    }
};


module.exports = BookStyles;

  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-yqhm4n9cvs',
  shadow: true,
})
export class Cyqhm4n9cvs {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
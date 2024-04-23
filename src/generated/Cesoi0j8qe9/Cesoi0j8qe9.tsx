
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-esoi0j8qe9',
  shadow: true,
})
export class Cesoi0j8qe9 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  